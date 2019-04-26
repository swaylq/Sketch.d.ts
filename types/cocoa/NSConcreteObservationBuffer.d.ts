/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteObservationBuffer<T0 = void, T1 = void, T2 = void> extends NSObservationBuffer {
    setMemoryPressureSensitive<R = void, P0 = boolean>(_setMemoryPressureSensitive: P0): R;
    isMemoryPressureSensitive<R = boolean>(): R;
    setAutomaticallyEmitsObjects<R = void, P0 = boolean>(_setAutomaticallyEmitsObjects: P0): R;
    automaticallyEmitsObjects<R = boolean>(): R;
    setBufferFullHandler<R = void, P0 = CDUnknownBlockType>(_setBufferFullHandler: P0): R;
    bufferFullHandler<R = CDUnknownBlockType>(): R;
    _receiveBox<R = void, P0 = unknown>(__receiveBox: P0): R;
    _mergeChanges<R = void>(): R;
    _alreadyOnQueueEmitAllObjects<R = void>(): R;
    _alreadyOnQueueEmitObject<R = void>(): R;
  }
  namespace NSConcreteObservationBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationBuffer {
      alloc<R = NSConcreteObservationBuffer>(): R;
      new: <R = NSConcreteObservationBuffer>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSConcreteObservationBuffer: cocoa.NSConcreteObservationBuffer.CLASS;
