/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPathLayerProtocol<T = any> extends MSLayerProtocol {
    reversePath<R = void>(): R;
    simplify<R = void>(): R;
    pathInFrame<R = MSPath>(): R;
    setPathInFrame<R = void, P0 = MSPath>(_v: P0): R;
    edited<R = boolean>(): R;
    setEdited<R = void, P0 = boolean>(_v: P0): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSPathLayerProtocol<T = any> extends MSLayerProtocol {  }
  }
}
