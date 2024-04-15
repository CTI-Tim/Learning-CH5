using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crestron.SimplSharpPro;
using Example3;

namespace ContractExample.TouchPanel
{
    internal class VolumeControl
    {
        private Contract _myContract;

        public VolumeControl(Contract c)
        {
            _myContract = c;
            _myContract.Volume.VolumeUp += Volume_VolumeUp;
            _myContract.Volume.VolumeDn += Volume_VolumeDn;
            _myContract.Volume.MuteToggle += Volume_MuteToggle;
        }

        private void Volume_MuteToggle(object sender, UIEventArgs e)
        {
            MessageBroker.SendMessage("MuteToggle", new MessagingSystem.Message { });  // Send an empty message to the broker
        }

        private void Volume_VolumeDn(object sender, UIEventArgs e)
        {
            // We send to the event broker the push and release by simply sending the current bool value
            MessageBroker.SendMessage("VolDown", new MessagingSystem.Message { Digital = e.SigArgs.Sig.BoolValue});
        }

        private void Volume_VolumeUp(object sender, UIEventArgs e)
        {
            MessageBroker.SendMessage("VolUp", new MessagingSystem.Message { Digital = e.SigArgs.Sig.BoolValue });
        }

        // public methods for feedback setting.  Because contracts are objects that need objects sent to them,
        // we have to make a method for every single separate feedback.  At least we can use an index for button array feedback.
        public void SetMuteFb(MessagingSystem.Message m)
        {
            _myContract.Volume.MuteFb((BoolInputSig sig, IVolume volume) => sig.BoolValue = m.Digital);
        }

        public void SetAnalogFb(MessagingSystem.Message m)
        {
            _myContract.Volume.VolumeFb((UShortInputSig sig, IVolume volume) => sig.UShortValue  = m.Analog);
        }
    }
}
