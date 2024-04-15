﻿using Crestron.SimplSharpPro;                       	// For Basic SIMPL#Pro classes
using Example2;

namespace ContractExample.TouchPanel
{
    public class PowerButtons
    {
        private Contract _myContract;

        public PowerButtons(Contract c)
        {
            _myContract = c;

            //Subscribe to each and every event handler created by the Contract manager
            _myContract.Room.PowerOn += Room_PowerOn;
            _myContract.Room.PowerOff += Room_PowerOff;

            // Set startup feedbacks
            _myContract.Room.PowerOffFb((BoolInputSig sig, IRoom room) => sig.BoolValue = true);
            _myContract.Room.PowerOnFb((BoolInputSig sig, IRoom room) => sig.BoolValue = false);
            _myContract.Room.PowerStateFb((StringInputSig sig, IRoom room) => sig.StringValue = "Room is OFF");
        }

        private void Room_PowerOff(object sender, UIEventArgs e)
        {
            MessageBroker.SendMessage("PowerOff", new MessagingSystem.Message { });
        }

        private void Room_PowerOn(object sender, UIEventArgs e)
        {
            MessageBroker.SendMessage("PowerOn", new MessagingSystem.Message { });
        }

        // public methods for feedback setting.  Because contracts are objects that need objects sent to them,
        // we have to make a method for every single separate feedback.  At least we can use an index for button array feedback.
        public void SetPowerFeedback(MessagingSystem.Message m)
        {
            _myContract.Room.PowerOffFb((BoolInputSig sig, IRoom room) => sig.BoolValue = !m.Digital);
            _myContract.Room.PowerOnFb((BoolInputSig sig, IRoom room) => sig.BoolValue = m.Digital);
            var state = "Room is OFF";
            if (m.Digital)
                state = "Room is ON";
            _myContract.Room.PowerStateFb((StringInputSig sig, IRoom room) => sig.StringValue = state);
        }
    }
}
