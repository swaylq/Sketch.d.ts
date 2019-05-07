/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayerAncestry<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    absoluteRect<R = CGRect>(): R;
    ancestorsForLayerInGroup_array<R = boolean, P0 = unknown, P1 = unknown>(_ancestorsForLayerInGroup: P0, _array: P1): R;
    findAncestors<R = unknown>(): R;
    initWithMSLayer<R = unknown, P0 = unknown>(_initWithMSLayer: P0): R;
    initWithLayer_ancestors_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithLayer: P0, _ancestors: P1, _document: P2): R;
    initWithLayer_document<R = unknown, P0 = unknown, P1 = unknown>(_initWithLayer: P0, _document: P1): R;
    ancestors<R = NSArray>(): R;
    setAncestors<R = void, P0 = NSArray>(_v: P0): R;
    page<R = MSImmutablePage>(): R;
    document<R = MSImmutableDocumentData>(): R;
    layer<R = MSImmutableLayer>(): R;
    artboard<R = MSImmutableArtboardGroup>(): R;
    parentGroup<R = MSImmutableLayerGroup>(): R;
    ancestorsAndSelf<R = NSArray>(): R;
  }
  namespace MSImmutableLayerAncestry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSImmutableLayerAncestry>(): R;
      new: <R = MSImmutableLayerAncestry>() => R;
      ancestryWithMSLayer<R = unknown, P0 = unknown>(_ancestryWithMSLayer: P0): R;
    }
  }
}

declare const MSImmutableLayerAncestry: cocoa.MSImmutableLayerAncestry.CLASS;
