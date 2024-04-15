using ContractExample.MessagingSystem;
using Crestron.SimplSharp;                          	// For Basic SIMPL# Classes
using Crestron.SimplSharpPro;                       	// For Basic SIMPL#Pro classes
using Crestron.SimplSharpPro.CrestronThread;        	// For Threading
using System;

namespace ContractExample
{
    public class ControlSystem : CrestronControlSystem
    {
        /*
         * This example moves the CH5 contracts off to its own touchpanel class to keep them contained and add in a very simple
         * messaging broker that leverages delegates so that objects that are "out of context" can send messages
         * and trigger other objects that are out of context.
         *
         * This means that control system is only used for  instantiation of classes and setting up the message broker.
         * If even these bits of code are offensive to you here, you could make another class and pass all the devices to that
         * class instead and do it there.
         */



        // Globals
        private Touchpanel myTp;
        private FakeHardware myHardware;


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
                myTp = new Touchpanel(0x04, this);
                myHardware = new FakeHardware();
                myHardware.BaseEvent += MyHardware_BaseEvent;

                /* Why are we doing these here?  because we have context to everything here.
                 * But you could create them inside the classes for each piece of hardware, and we did exactly that
                 * for the touch panel class as that was where those methods had available context.
                 *
                 *
                 * Just be careful with sprinkling them all over
                 * randomly in the code just to satisfy someones opinion.    Putting them in a obvious location where they can be grouped
                 * for readability and maintainability is always a good idea.
                 *
                 * contrary to what the internet says, it is ok to have some code in controlsystem.cs if it is non blocking
                 * and takes no time to execute.
                 */
                MessageBroker.AddDelegate("PowerOn", myHardware.On);
                MessageBroker.AddDelegate("PowerOff", myHardware.Off);
                MessageBroker.AddDelegate("SelectSource", myHardware.SourceSelect);
                MessageBroker.AddDelegate("VolUp", myHardware.VolumeUpBtn);
                MessageBroker.AddDelegate("VolDn", myHardware.VolumeDnBtn);
                MessageBroker.AddDelegate("MuteToggle", myHardware.MuteToggle);


                // Feedback message broker subscriptions have been moved to the touchpanel class.


            }
            catch (Exception e)
            {
                ErrorLog.Error("Error in InitializeSystem: {0}", e.Message);
            }
        }


        //  The event handler method below is better suited to live in the devices own wrapper class.
        //  a C# for Crestron best practice is to wrap all hardware in their own classes so you can control the interface

        private void MyHardware_BaseEvent(object sender, FakeHardware.Args e)
        {
            CrestronConsole.PrintLine($"Power state was changed to {e.State}  Source is currently {e.SourceSelected}");
            MessageBroker.SendMessage("PowerFb", new MessagingSystem.Message { Digital = e.State });
            MessageBroker.SendMessage("InputFb", new Message() { Analog = (ushort)e.SourceSelected });
        }
    }
}