/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextureVertexBuffer<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithVerticies_vertexCount_indicies_indexCount<R = unknown, P0 = MSTextureVertex, P1 = number, P2 = number, P3 = number>(_initWithVerticies: P0, _vertexCount: P1, _indicies: P2, _indexCount: P3): R;
    vertexCount<R = number>(): R;
    indexCount<R = number>(): R;
    indicies<R = number>(): R;
    verticies<R = MSTextureVertex>(): R;
    indiciesLength<R = number>(): R;
    verticiesLength<R = number>(): R;
  }
  namespace MSTextureVertexBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSTextureVertexBuffer>(): R;
      new: <R = MSTextureVertexBuffer>() => R;
    }
  }
}

declare const MSTextureVertexBuffer: cocoa.MSTextureVertexBuffer.CLASS;
