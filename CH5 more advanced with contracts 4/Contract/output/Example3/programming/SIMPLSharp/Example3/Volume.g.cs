using System;
using System.Collections.Generic;
using System.Linq;
using Crestron.SimplSharpPro.DeviceSupport;
using Crestron.SimplSharpPro;

namespace Example3
{
    public interface IVolume
    {
        object UserObject { get; set; }

        event EventHandler<UIEventArgs> VolumeUp;
        event EventHandler<UIEventArgs> VolumeDn;
        event EventHandler<UIEventArgs> MuteToggle;

        void VolumeUpFb(VolumeBoolInputSigDelegate callback);
        void VolumeDnFb(VolumeBoolInputSigDelegate callback);
        void MuteFb(VolumeBoolInputSigDelegate callback);
        void VolumeFb(VolumeUShortInputSigDelegate callback);

    }

    public delegate void VolumeBoolInputSigDelegate(BoolInputSig boolInputSig, IVolume volume);
    public delegate void VolumeUShortInputSigDelegate(UShortInputSig uShortInputSig, IVolume volume);

    internal class Volume : IVolume, IDisposable
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
                public const uint VolumeUp = 1;
                public const uint VolumeDn = 2;
                public const uint MuteToggle = 3;

                public const uint VolumeUpFb = 1;
                public const uint VolumeDnFb = 2;
                public const uint MuteFb = 3;
            }
            internal static class Numerics
            {

                public const uint VolumeFb = 1;
            }
        }

        #endregion

        #region Construction and Initialization

        internal Volume(ComponentMediator componentMediator, uint controlJoinId)
        {
            ComponentMediator = componentMediator;
            Initialize(controlJoinId);
        }

        private void Initialize(uint controlJoinId)
        {
            ControlJoinId = controlJoinId; 
 
            _devices = new List<BasicTriListWithSmartObject>(); 
 
            ComponentMediator.ConfigureBooleanEvent(controlJoinId, Joins.Booleans.VolumeUp, onVolumeUp);
            ComponentMediator.ConfigureBooleanEvent(controlJoinId, Joins.Booleans.VolumeDn, onVolumeDn);
            ComponentMediator.ConfigureBooleanEvent(controlJoinId, Joins.Booleans.MuteToggle, onMuteToggle);

        }

        public void AddDevice(BasicTriListWithSmartObject device)
        {
            Devices.Add(device);
            ComponentMediator.HookSmartObjectEvents(device.SmartObjects[ControlJoinId]);
        }

        public void RemoveDevice(BasicTriListWithSmartObject device)
        {
            Devices.Remove(device);
            ComponentMediator.UnHookSmartObjectEvents(device.SmartObjects[ControlJoinId]);
        }

        #endregion

        #region CH5 Contract

        public event EventHandler<UIEventArgs> VolumeUp;
        private void onVolumeUp(SmartObjectEventArgs eventArgs)
        {
            EventHandler<UIEventArgs> handler = VolumeUp;
            if (handler != null)
                handler(this, UIEventArgs.CreateEventArgs(eventArgs));
        }

        public event EventHandler<UIEventArgs> VolumeDn;
        private void onVolumeDn(SmartObjectEventArgs eventArgs)
        {
            EventHandler<UIEventArgs> handler = VolumeDn;
            if (handler != null)
                handler(this, UIEventArgs.CreateEventArgs(eventArgs));
        }

        public event EventHandler<UIEventArgs> MuteToggle;
        private void onMuteToggle(SmartObjectEventArgs eventArgs)
        {
            EventHandler<UIEventArgs> handler = MuteToggle;
            if (handler != null)
                handler(this, UIEventArgs.CreateEventArgs(eventArgs));
        }


        public void VolumeUpFb(VolumeBoolInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].BooleanInput[Joins.Booleans.VolumeUpFb], this);
            }
        }

        public void VolumeDnFb(VolumeBoolInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].BooleanInput[Joins.Booleans.VolumeDnFb], this);
            }
        }

        public void MuteFb(VolumeBoolInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].BooleanInput[Joins.Booleans.MuteFb], this);
            }
        }


        public void VolumeFb(VolumeUShortInputSigDelegate callback)
        {
            for (int index = 0; index < Devices.Count; index++)
            {
                callback(Devices[index].SmartObjects[ControlJoinId].UShortInput[Joins.Numerics.VolumeFb], this);
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
            return string.Format("Contract: {0} Component: {1} HashCode: {2} {3}", "Volume", GetType().Name, GetHashCode(), UserObject != null ? "UserObject: " + UserObject : null);
        }

        #endregion

        #region IDisposable

        public bool IsDisposed { get; set; }

        public void Dispose()
        {
            if (IsDisposed)
                return;

            IsDisposed = true;

            VolumeUp = null;
            VolumeDn = null;
            MuteToggle = null;
        }

        #endregion

    }
}
