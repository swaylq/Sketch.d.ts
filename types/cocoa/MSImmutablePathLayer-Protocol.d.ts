/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePathLayerProtocol<T0 = void, T1 = void, T2 = void> extends MSLayerProtocol {
    decoratedPathInBoundsInDocument_asSubpath<R = MSPath, P0 = MSImmutableDocumentData, P1 = boolean>(_decoratedPathInBoundsInDocument: P0, _asSubpath: P1): R;
    style<R = MSImmutableStyle>(): R;
    hasMarkers<R = boolean>(): R;
  }
  namespace MSImmutablePathLayerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerProtocol {}
  }
}
