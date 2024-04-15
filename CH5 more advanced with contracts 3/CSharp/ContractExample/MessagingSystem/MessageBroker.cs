using ContractExample.MessagingSystem;
using System;
using System.Collections.Generic;

namespace ContractExample
{
    static class MessageBroker  // Static because everyone is going to use this everywhere
    {
        /*
         * Why do we need this?   the reason is Programming Context.   Class A can not talk to anything inside Class B
         * or is even aware of class B existing unless we program class A to know about class B and then pass a reference to it.
         * This forces you to start making all your classes not only coupled but tightly coupled.   in some instances that is not a
         * big deal, but when your goal is not having to re write classes or drivers, etc over and over and modify them for each
         * use case, it becomes a problem.  Being able to create a messaging system that can send updates to a central class
         * that every single class in the program can see (static) means class A only needs to know about the broker
         * and the message format.  Now Class A can trigger something in class B without knowing anything or even
         * able to see class B.   There are far more complex message brokers out there.
         * This one is intentionally to be as simple as possible and only using delegates. an advantage of c# delegates
         * is that they are async by default as the mechanics in them use async and await in the background.
         * BUT REMEMBER! Your code called is called synchronously and if blocking will cause delays and performance issues.
         *
         *
         *  we need to create a delegate signature for our messaging we we are going to pass the message class defined in Message.cs
         *
         *  Then we create a dictionary that lets you set a string key (name) and a delegate.  These are going to store
         *  the delegates we create to basically create our messaging system.
         */

        public delegate void MessageDelegate(Message m);
        private static Dictionary<string, MessageDelegate> _messages = new Dictionary<string, MessageDelegate>();

        /*
         * Note: if you use resharper you will get a notice that the above should be readonly.   This is an example of a "style"
         * rule that makes code less readable and is a bad idea. marking it readonly will only confuse learning programmers.
         * Clarity of code is far more important than any style rules.
         */

        // We are not going to use a default constructor because we do not need one.
        // You do not have to create a default constructor if you do not have a use for one.

        public static void AddDelegate(string key, MessageDelegate method)
        {
            if (!_messages.ContainsKey(key))  // we do not want duplicate keys.
                _messages.Add(key, method);
            else
            {
                throw new Exception("## Duplicate key attempted in Message Broker Class ##");
                // I throw and exception here because this would be a critical error and cause problems.
            }
        }

        public static void RemoveDelegate(string key)
        {
            if (_messages.ContainsKey(key))
                _messages.Remove(key);

            // Not throwing an Exception here because not deleting something that does not exist will not cause any harm
        }

        public static void SendMessage(string key, Message m)
        {
            if (_messages.ContainsKey(key))
                _messages[key].DynamicInvoke(m);
            else
            {
                throw new Exception("## Message attempted to be sent to non existent key ##");
            }
        }

    }
}
