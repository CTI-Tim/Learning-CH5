using ContractExample.MessagingSystem;
using Crestron.SimplSharp;
using System;

namespace ContractExample
{
    // This is emulating a fake display that has ON/OFF and a source select.  It is here only for testing and example.
    // It follows a typical crestron device having an event and some control methods.

    public class FakeHardware
    {
        private bool PowerState = false;
        private int SourceSelected = 0;

        public event EventHandler<Args> BaseEvent;
        public FakeHardware()
        {

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
