/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableFlowConnection<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    destinationArtboardID<R = NSString>(): R;
    setDestinationArtboardID<R = void, P0 = NSString>(_v: P0): R;
    animationType<R = number>(): R;
    setAnimationType<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableFlowConnection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableFlowConnection>(): R;
      new: <R = _MSImmutableFlowConnection>() => R;
    }
  }
}
