namespace ContractExample.MessagingSystem
{
    public class Message
    {
        public string Name { get; set; }
        public int ID { get; set; }
        public bool Digital { get; set; }
        public ushort Analog { get; set; }
        public string Serial { get; set; }

        //  Named similar to Simpl for learning.
    }
}
