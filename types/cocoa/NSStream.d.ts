/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStream<T0 = void, T1 = void, T2 = void> {
    // + NSStream(NSStream): 
    streamError<R = unknown>(): R;
    streamStatus<R = number>(): R;
    removeFromRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_removeFromRunLoop: P0, _forMode: P1): R;
    scheduleInRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_scheduleInRunLoop: P0, _forMode: P1): R;
    setProperty_forKey<R = boolean, P0 = unknown, P1 = unknown>(_setProperty: P0, _forKey: P1): R;
    propertyForKey<R = unknown, P0 = unknown>(_propertyForKey: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
    close<R = void>(): R;
    open<R = void>(): R;
  }
  namespace NSStream {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSStream(NSSocketStreamCreationExtensions): 
      getStreamsToHost_port_inputStream_outputStream<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_getStreamsToHost: P0, _port: P1, _inputStream: P2, _outputStream: P3): R;
      getStreamsToHostWithName_port_inputStream_outputStream<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_getStreamsToHostWithName: P0, _port: P1, _inputStream: P2, _outputStream: P3): R;
      // + NSStream(NSStreamBoundPairCreationExtensions): 
      getBoundStreamsWithBufferSize_inputStream_outputStream<R = void, P0 = number, P1 = unknown, P2 = unknown>(_getBoundStreamsWithBufferSize: P0, _inputStream: P1, _outputStream: P2): R;
    }
  }
}

declare const NSStream: cocoa.NSStream.CLASS;
