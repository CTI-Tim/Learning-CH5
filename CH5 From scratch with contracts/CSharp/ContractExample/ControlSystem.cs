using Crestron.SimplSharp;                          	// For Basic SIMPL# Classes
using Crestron.SimplSharpPro;                       	// For Basic SIMPL#Pro classes
using Crestron.SimplSharpPro.CrestronThread;        	// For Threading
using Crestron.SimplSharpPro.UI;
using Example;
using System;

namespace ContractExample
{
    public class ControlSystem : CrestronControlSystem
    {
        // Globals
        private Tsw760 _myTp;
        private Contract _myContract;  // Look in Contract.g.cs for where this is hiding. Namespace is Example in this case

        public ControlSystem()
            : base()
        {
            try
            {
                Thread.MaxNumberOfUserThreads = 20;
            }
            catch (Exception e)
            {
                ErrorLog.Error("Error in the constructor: {0}", e.Message);
            }
        }

        public override void InitializeSystem()
        {
            try
            {
                _myContract = new Contract();

                // once we created the contract we need to attach it to a device.  Create the hardware
                _myTp = new Tsw760(0x04, this);
                _myTp.Register();

                // Now add the contract to the device
                _myContract.AddDevice(_myTp);

                //Subscribe to each and every event handler created by the Contract manager
                _myContract.Room.PowerOn += Room_PowerOn;
                _myContract.Room.PowerOff += Room_PowerOff;

                //Set our boot up state of feedbacks

                // Using Contracts sending feedback is only a tiny bit more involved than using a join
                _myContract.Room.RoomNameFb((StringInputSig sig, IRoom room) => sig.StringValue = "C# Code Room");
                _myContract.Room.PowerOffFb((BoolInputSig sig, IRoom room) => sig.BoolValue = true);
                _myContract.Room.PowerOnFb((BoolInputSig sig, IRoom room) => sig.BoolValue = false);
                _myContract.Room.PowerStateFb((StringInputSig sig, IRoom room) => sig.StringValue = "Room is OFF");


            }
            catch (Exception e)
            {
                ErrorLog.Error("Error in InitializeSystem: {0}", e.Message);
            }
        }

        private void Room_PowerOff(object sender, UIEventArgs e)
        {
            CrestronConsole.PrintLine($" {e.SigArgs.Sig.Name} was triggered with {e.SigArgs.Sig.BoolValue}");

            _myContract.Room.PowerOffFb((BoolInputSig sig, IRoom room) => sig.BoolValue = true);
            _myContract.Room.PowerOnFb((BoolInputSig sig, IRoom room) => sig.BoolValue = false);
            _myContract.Room.PowerStateFb((StringInputSig sig, IRoom room) => sig.StringValue = "Room is OFF");

        }

        private void Room_PowerOn(object sender, UIEventArgs e)
        {
            CrestronConsole.PrintLine($" {e.SigArgs.Sig.Name} was triggered with {e.SigArgs.Sig.BoolValue}");

            _myContract.Room.PowerOffFb((BoolInputSig sig, IRoom room) => sig.BoolValue = false);
            _myContract.Room.PowerOnFb((BoolInputSig sig, IRoom room) => sig.BoolValue = true);
            _myContract.Room.PowerStateFb((StringInputSig sig, IRoom room) => sig.StringValue = "Room is ON");
        }
    }
}