using Crestron.SimplSharp;                          	// For Basic SIMPL# Classes
using Crestron.SimplSharpPro;                       	// For Basic SIMPL#Pro classes
using Example3;                                         // This is the code from Contract Editor

namespace ContractExample.TouchPanel
{
    public class SourceInterlock
    {
        private Contract _myContract;  // Look in Contract.g.cs for where this is hiding. Namespace is Example in this case

        // Note: storing states in memory is a best practice of programming in general.  We have taught you to be "lazy"
        // in the past by reading inputs to see what you set them to last.  Yes that means if you have 100 interlocks,
        // you need 100 variables to store their state.  I suggest an array at that point :-)

        private ushort _interlockState = 255;  // we set it to 255 so it doesn't cause operation issues on startup where you can not select button 0


        /* Why did we break Out the interlock to it 's own class?
         *
         * Typically in programming you use a class or function for code that will be re-used,  we have only ONE interlock so this will
         * never be re-used again.  But  breaking out code to functions/methods/classes for organization, readability and maintainability
         * is a valid use IF it does not  obfuscate the code or make it harder to read.
         *
         * In this case the touchpanel class would become gigantic for a fully functioning room.  This would make the code harder to manage.
         * Because we can just pass the contract to subclasses we can simply put code for each function in their own classes to make it
         * easier to read.   Yes you could do the same with a partial-class across multiple files. But is this really the only time you will
         * ever use an interlock?  If you make different functionality of a touchpanel into classes like this the next program you write
         * you could just grab that interlock class and drop it into the next program and you are already done after some minor tweaks.
         *
         * Just be careful to NOT create a giant spaghetti mess of code going here and there and elsewhere.
         *
         *
         */

        public SourceInterlock(Contract c)
        {
            _myContract = c;

            // Create our event handlers for the interlock.

            _myContract.Room.Button[0].Push += InterlockButton0Push;
            _myContract.Room.Button[1].Push += InterlockButton1Push;
            _myContract.Room.Button[2].Push += InterlockButton2Push;
            _myContract.Room.Button[3].Push += InterlockButton3Push;
            _myContract.Room.Button[4].Push += InterlockButton4Push;
            _myContract.Room.Button[5].Push += InterlockButton5Push;

            // Label the interlock buttons
            var i = 0;
            foreach (var item in _myContract.Room.Button)
            {
                // Notice we use IButton button here...  It's because that is the signature defined in Button.g.cs
                item.Label((StringInputSig sig, IButton button) => sig.StringValue = "Button " + i);

                i++;
                CrestronConsole.PrintLine($"Applied the label to button {i}");
            }
        }

        // The interlock event handlers,  one for every single button in the interlock. Having access to the index would have made this
        // cleaner and easier.
        private void InterlockButton0Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                MessageBroker.SendMessage("SelectSource", new MessagingSystem.Message { Analog = 0 });
        }
        private void InterlockButton1Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                MessageBroker.SendMessage("SelectSource", new MessagingSystem.Message { Analog = 1 });
        }
        private void InterlockButton2Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                MessageBroker.SendMessage("SelectSource", new MessagingSystem.Message { Analog = 2 });
        }
        private void InterlockButton3Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                MessageBroker.SendMessage("SelectSource", new MessagingSystem.Message { Analog = 3 });
        }
        private void InterlockButton4Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                MessageBroker.SendMessage("SelectSource", new MessagingSystem.Message { Analog = 4 });
        }
        private void InterlockButton5Push(object sender, UIEventArgs e)
        {
            if (e.SigArgs.Sig.BoolValue == true)
                MessageBroker.SendMessage("SelectSource", new MessagingSystem.Message { Analog = 5 });
        }

        //Feedback handling.
        public void SetInputFeedback(MessagingSystem.Message m)
        {
            var input = m.Analog;
            if (input < 0 || input > _myContract.Room.Button.Length)
                input = 0;  //default to zero

            if (input != _interlockState)  // Proper interlock operation does nothing if the input selected equals the last selected.
            {

                foreach (var i in _myContract.Room.Button)
                {
                    i.Feedback((BoolInputSig sig, IButton button) => sig.BoolValue = false);
                }

                CrestronConsole.PrintLine($"Input number sent was {m.Analog} and changed to {input}");
                _myContract.Room.Button[input].Feedback((BoolInputSig sig, IButton button) => sig.BoolValue = true);

                _interlockState = input;
            }
        }

    }
}
