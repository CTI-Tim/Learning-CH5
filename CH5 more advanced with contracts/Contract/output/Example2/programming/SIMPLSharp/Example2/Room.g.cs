using System;
using System.Collections.Generic;
using System.Linq;
using Crestron.SimplSharpPro.DeviceSupport;
using Crestron.SimplSharpPro;

namespace Example2
{
    public interface IRoom
    {
        object UserObject { get; set; }

        event EventHandler<UIEventArgs> PowerOn;
        event EventHandler<UIEventArgs> PowerOff;

        void PowerOnFb(RoomBoolInputSigDelegate callback);
        void PowerOffFb(RoomBoolInputSigDelegate callback);
        void PowerStateFb(RoomStringInputSigDelegate callback);
        void RoomNameFb(RoomStringInputSigDelegate callback);

        Example2.IButton[] Button { get; }
    }

    public delegate void RoomBoolInputSigDelegate(BoolInputSig boolInputSig, IRoom room);
    public delegate void RoomStringInputSigDelegate(StringInputSig stringInputSig, IRoom room);

    /// <summary>
    /// RoomControls
    /// </summary>
    internal class Room : IRoom, IDisposable
    {
        #region Standard CH5 Component members

        private ComponentMediator ComponentMediator { get; set; }

        public object UserObject { get; set; }

        public uint ControlJoinId { get; private set; }

        private IList<BasicTriListWithSmartObject> _devices;
        public IList<BasicTriListWithSmartObject> Devices { get { return _devices; } }

        #endregion

        #region Joins

        private static class Joins
        {
            internal static class Booleans
            {
                public const uint PowerOn = 1;
                public const uint PowerOff = 2;

                public const uint PowerOnFb = 1;
                public const uint PowerOffFb = 2;
            }
            internal static class Strings
            {

                public const uint PowerStateFb = 1;
                public const uint RoomNameFb = 2;
            }
        }

        #endregion

        #region Construction and Initialization

        internal Room(ComponentMediator componentMediator, uint controlJoinId)
        {
            ComponentMediator = componentMediator;
            Initialize(controlJoinId);
        }

        private static readonly IDictionary<uint, List<uint>> ButtonSmartObjectIdMappings = new Dictionary<uint, List<uint>> {
            { 1, new List<uint> { 2, 3, 4, 5, 6, 7 } }};

        internal static void ClearDictionaries()
        {
            ButtonSmartObjectIdMappings.Clear();
        }

        private void Initialize(uint controlJoinId)
        {
            ControlJoinId = controlJoinId; 
 
            _devices = new List<BasicTriListWithSmartObject>(); 
 
            ComponentMediator.ConfigureBooleanEvent(controlJoinId, Joins.Booleans.PowerOn, onPowerOn);
            ComponentMediator.ConfigureBooleanEvent(controlJoinId, Joins.Booleans.PowerOff, onPowerOff);

            List<uint> buttonList = ButtonSmartObjectIdMappings[controlJoinId];
            Button = new Example2.IButton[buttonList.Count];
            for (int index = 0; index < buttonList.Count; index++)
            {
                Button[index] = new Example2.Button(ComponentMediator, buttonList[index]); 
            }

        }

        public void AddDevice(BasicTriListWithSmartObject device)
        {
            Devices.Add(device);
            ComponentMediator.HookSmartObjectEvents(device.SmartObjects[ControlJoinId]);
            for (int index = 0; index < Button.Length; index++)
            {
                ((Example2.Button)Button[index]).AddDevice(device);
            }
        }

        public void RemoveDevice(BasicTriListWithSmartObject device)
        {
            Devices.Remove(device);
            ComponentMediator.UnHookSmartObjectEvents(device.SmartObjects[ControlJoinId]);
            for (int index = 0; index < Button.Length; index++)
            {
                ((Example2.Button)Button[index]).RemoveDevice(device);
            }
        }

        #endregion

        #region CH5 Contract

        public Example2.IButton[] Button { get; private set; }

        public event EventHandler<UIEventArgs> PowerOn;
        private void onPowerOn(SmartObjectEventArgs eventArgs)
        {
            EventHandler<UIEventArgs> handler = PowerOn;
            if (handler != null)
                handler(this, UIEventArgs.CreateEventArgs(eventArgs));
        }

        public event EventHandler<UIEventArgs> PowerOff;
        private void onPowerOff(SmartObjectEventArgs eventArgs)
        {
            EventHandler<UIEventArgs> handler = PowerOff;
            if (handler != null)
                handler(this, UIEventArgs.CreateEventArgs(eventArgs));
        }


        public void PowerOnFb(RoomBoolInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].BooleanInput[Joins.Booleans.PowerOnFb], this);
            }
        }

        public void PowerOffFb(RoomBoolInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].BooleanInput[Joins.Booleans.PowerOffFb], this);
            }
        }


        public void PowerStateFb(RoomStringInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].StringInput[Joins.Strings.PowerStateFb], this);
            }
        }

        public void RoomNameFb(RoomStringInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].StringInput[Joins.Strings.RoomNameFb], this);
            }
        }

        #endregion

        #region Overrides

        public override int GetHashCode()
        {
            return (int)ControlJoinId;
        }

        public override string ToString()
        {
            return string.Format("Contract: {0} Component: {1} HashCode: {2} {3}", "Room", GetType().Name, GetHashCode(), UserObject != null ? "UserObject: " + UserObject : null);
        }

        #endregion

        #region IDisposable

        public bool IsDisposed { get; set; }

        public void Dispose()
        {
            if (IsDisposed)
                return;

            IsDisposed = true;

            for (int index = 0; index < Button.Length; index++)
            {
                ((Example2.Button)Button[index]).Dispose();
            }

            PowerOn = null;
            PowerOff = null;
        }

        #endregion

    }
}
