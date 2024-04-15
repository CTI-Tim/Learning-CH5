using Crestron.SimplSharp;                          	// For Basic SIMPL# Classes
using Crestron.SimplSharpPro;                       	// For Basic SIMPL#Pro classes
using Crestron.SimplSharpPro.CrestronThread;        	// For Threading
using Crestron.SimplSharpPro.UI;
using Example2;
//using Example;
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
                _myContract = new Contract();  // Choose your imported contract class from Contract.g.cs

                // once we created the contract we need to attach it to a device.  Create the hardware
                _myTp = new Tsw760(0x04, this);
                _myTp.Register();

                // Now add the contract to the device
                _myContract.AddDevice(_myTp);

                //Subscribe to each and every event handler created by the Contract manager
                _myContract.Room.PowerOn += Room_PowerOn;
                _myContract.Room.PowerOff += Room_PowerOff;

                // This does not work as we can not get the index of what was pushed
                /*
                foreach( var item in _myContract.Room.Button)
                    item.Push += InterlockButtonPush;
                */

                // Because you can not get any details from the contract you have to manually create every single handler for the interlock
                _myContract.Room.Button[0].Push += InterlockButton0Push;
                _myContract.Room.Button[1].Push += InterlockButton1Push;
                _myContract.Room.Button[2].Push += InterlockButton2Push;
                _myContract.Room.Button[3].Push += InterlockButton3Push;
                _myContract.Room.Button[4].Push += InterlockButton4Push;
                _myContract.Room.Button[5].Push += InterlockButton5Push;


                //Set our boot up state of feedbacks

                // Using Contracts sending feedback is only a tiny bit more involved than using a join, we use a lambda here to simplify
                // Iroom room  comes from the delegate signature made in Room.g.cs
                _myContract.Room.RoomNameFb((StringInputSig sig, IRoom room) => sig.StringValue = "C# Code Room");
                _myContract.Room.PowerOffFb((BoolInputSig sig, IRoom room) => sig.BoolValue = true);
                _myContract.Room.PowerOnFb((BoolInputSig sig, IRoom room) => sig.BoolValue = false);
                _myContract.Room.PowerStateFb((StringInputSig sig, IRoom room) => sig.StringValue = "Room is OFF");
                // put labels on the 6 buttons

                var i = 0;
                foreach (var item in _myContract.Room.Button)
                {
                    // Notice we use IButton button here...  It's because that is the signature defined in Button.g.cs
                    item.Label((StringInputSig sig, IButton button) => sig.StringValue = "B" + i);

                    i++;
                    CrestronConsole.PrintLine($"Applied the label to button {i}");
                }

            }
            catch (Exception e)
            {
                ErrorLog.Error("Error in InitializeSystem: {0}", e.Message);
            }
        }

        // The interlock event handlers,  one for every single button in the interlock
        private void InterlockButton0Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                InterlockCode(0);
        }
        private void InterlockButton1Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                InterlockCode(1);
        }
        private void InterlockButton2Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                InterlockCode(2);
        }
        private void InterlockButton3Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                InterlockCode(3);
        }
        private void InterlockButton4Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                InterlockCode(4);
        }
        private void InterlockButton5Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                InterlockCode(5);
        }
        // The actual code to handle the interlock
        private void InterlockCode(int item)
        {
            CrestronConsole.PrintLine($"was sent Interlock push {item}");
            foreach (var i in _myContract.Room.Button)
            {
                i.Feedback((BoolInputSig sig, IButton button) => sig.BoolValue = false);
            }
            _myContract.Room.Button[item].Feedback((BoolInputSig sig, IButton button) => sig.BoolValue = true);
        }


        // This here will not work. you can not get an index number out of the button array in the contract. All the data returned is
        // Generic and has no identifying information
        /*
        private void InterlockButtonPush(object sender, UIEventArgs e)
        {
            
            CrestronConsole.PrintLine($" {e.SigArgs.Sig.Name} was triggered with {e.SigArgs.Sig.BoolValue} {e.Device.ID} {e.SigArgs.Sig.Number}");
        }

        */
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