using ContractExample.TouchPanel;
using Crestron.SimplSharpPro;                       	// For Basic SIMPL#Pro classes
using Crestron.SimplSharpPro.UI;
using Example2;                                         // This is the code from Contract Editor

namespace ContractExample
{
    public class Touchpanel
    {
        // Globals
        private Tsw760 _myTp;
        private Contract _myContract;  // Look in Contract.g.cs for where this is hiding. Namespace is Example in this case

        private SourceInterlock _myInterlock;
        private PowerButtons _myPowerButtons;

        public Touchpanel(int IpId, ControlSystem cs)
        {

            _myContract = new Contract();  // Choose your imported contract class from Contract.g.cs

            // once we created the contract we need to attach it to a device.  Create the hardware
            _myTp = new Tsw760(0x04, cs);
            _myTp.Register();

            // Now add the contract to the device
            _myContract.AddDevice(_myTp);


            // Lets start adding our classes for the different elements on the touchscreen and subscribe to their feedback methods
            // WE only have to pass the contract reference to them.

            _myPowerButtons = new PowerButtons(_myContract);
            MessageBroker.AddDelegate("PowerFb", _myPowerButtons.SetPowerFeedback);
            _myInterlock = new SourceInterlock(_myContract);  // we add the interlock code to the touchpanel
            MessageBroker.AddDelegate("InputFb", _myInterlock.SetInputFeedback);  // add the message broker subscription for FB


            // Using Contracts sending feedback is only a tiny bit more involved than using a join, we use a lambda here to simplify
            // IRoom room  comes from the delegate signature made in Room.g.cs
            _myContract.Room.RoomNameFb((StringInputSig sig, IRoom room) => sig.StringValue = "C# Code Room");
        }
    }
}
