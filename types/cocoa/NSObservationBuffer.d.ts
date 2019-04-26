/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationBuffer<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
    emitAllObjects<R = void>(): R;
    emitObject<R = void>(): R;
    initWithMaximumObjectCount_fullPolicy_outputQueue<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initWithMaximumObjectCount: P0, _fullPolicy: P1, _outputQueue: P2): R;
    automaticallyEmitsObjects<R = boolean>(): R;
    setAutomaticallyEmitsObjects<R = void, P0 = boolean>(_v: P0): R;
    bufferFullHandler<R = CDUnknownBlockType>(): R;
    setBufferFullHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    memoryPressureSensitive<R = boolean>(): R;
    setMemoryPressureSensitive<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSObservationBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservationTransformer {
      alloc<R = NSObservationBuffer>(): R;
      new: <R = NSObservationBuffer>() => R;
      bufferWithMaximumObjectCount_fullPolicy_outputQueue<R = unknown, P0 = number, P1 = number, P2 = unknown>(_bufferWithMaximumObjectCount: P0, _fullPolicy: P1, _outputQueue: P2): R;
      bufferWithOutputQueue<R = unknown, P0 = unknown>(_bufferWithOutputQueue: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSObservationBuffer: cocoa.NSObservationBuffer.CLASS;
