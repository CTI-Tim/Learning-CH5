using ContractExample.MessagingSystem;
using Crestron.SimplSharp;
using System;
using System.ComponentModel;
using System.Threading;

namespace ContractExample
{
    // This is emulating a fake display that has ON/OFF and a source select.  It is here only for testing and example.
    // It follows a typical crestron device having an event and some control methods.

    public class FakeHardware
    {
        private bool PowerState = false;
        private int SourceSelected = 0;
        private ushort _volLvl = 0;
        private bool _volDirection = false;

        BackgroundWorker _worker = new BackgroundWorker();

        public event EventHandler<Args> BaseEvent;
        public FakeHardware()
        {
            _worker.DoWork += Worker_RampUp;
        }

        private void Worker_RampUp(object sender, DoWorkEventArgs e)
        {
            BackgroundWorker worker = sender as BackgroundWorker;
            while (!worker.CancellationPending)
            {

            }
        }

        public void On(Message m)
        {
            PowerState = true;
            OnRaiseEvent(new Args());
        }
        public void Off(Message m)
        {
            PowerState = false;
            OnRaiseEvent(new Args());
        }

        public void SourceSelect(Message m)
        {
            CrestronConsole.PrintLine($"we were asked to select {m.Analog}");
            var i = m.Analog;
            if (SourceSelected != i)
            {
                SourceSelected = i;
                OnRaiseEvent(new Args());

            }
        }

        public void VolumeUpBtn(Message m)
        {
            
            switch (m.Digital)
            {
                case true:
                    _volDirection = true;
                    _worker.RunWorkerAsync();
                    break;
                case false:
                    _worker.CancelAsync();
                    break;
            }
        }
        public void VolumeDnBtn(Message m)
        {
            switch (m.Digital)
            {
                case true:
                    _volDirection = false;
                    _worker.RunWorkerAsync();
                    break;
                case false:
                    _worker.CancelAsync();
                    break;
            }
        }
        public void MuteToggle(Message m)
        {

        }

        private void rampUp()
        {

        }


        protected virtual void OnRaiseEvent(Args e)
        {
            EventHandler<Args> raisedEvent = BaseEvent;
            if (raisedEvent != null)
            {
                e.SourceSelected = SourceSelected;
                e.State = PowerState;

                raisedEvent(this, e);
            }
        }

        public class Args
        {
            public bool State { get; set; }
            public int SourceSelected { get; set; }
        }

    }
}
