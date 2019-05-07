/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGeometryInspectorSection<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
    refreshBindingsOnPath<R = void, P0 = unknown>(_refreshBindingsOnPath: P0): R;
    hasSliceLayer<R = boolean>(): R;
    hasArtboardLayer<R = boolean>(): R;
    hasOnlyImageLayers<R = boolean>(): R;
    hasOnlyArtboardAndSliceLayers<R = boolean>(): R;
    hasOnlySliceLayers<R = boolean>(): R;
    hasOnlyArtboardLayers<R = boolean>(): R;
    hasOnlyLineShapeLayers<R = boolean>(): R;
    insetSeparator<R = boolean>(): R;
    setInsetSeparator<R = void, P0 = boolean>(_v: P0): R;
    imageOriginalSizeItem<R = MSBitmapResizeToOriginalItem>(): R;
    setImageOriginalSizeItem<R = void, P0 = MSBitmapResizeToOriginalItem>(_v: P0): R;
    paddingItem2<R = MSPaddingInspectorItem>(): R;
    setPaddingItem2<R = void, P0 = MSPaddingInspectorItem>(_v: P0): R;
    paddingItem1<R = MSPaddingInspectorItem>(): R;
    setPaddingItem1<R = void, P0 = MSPaddingInspectorItem>(_v: P0): R;
    lineEndItem2<R = MSLineEndpointInspectorItem2>(): R;
    setLineEndItem2<R = void, P0 = MSLineEndpointInspectorItem2>(_v: P0): R;
    lineEndItem1<R = MSLineEndpointInspectorItem1>(): R;
    setLineEndItem1<R = void, P0 = MSLineEndpointInspectorItem1>(_v: P0): R;
    lineTransformItem<R = MSLineTransformInspectorItem>(): R;
    setLineTransformItem<R = void, P0 = MSLineTransformInspectorItem>(_v: P0): R;
    artboardPresetsItem<R = MSArtboardPresetInspectorItem>(): R;
    setArtboardPresetsItem<R = void, P0 = MSArtboardPresetInspectorItem>(_v: P0): R;
    artboardSizeItem<R = MSArtboardSizeInspectorItem>(): R;
    setArtboardSizeItem<R = void, P0 = MSArtboardSizeInspectorItem>(_v: P0): R;
    sizeItem<R = MSSizeInspectorItem>(): R;
    setSizeItem<R = void, P0 = MSSizeInspectorItem>(_v: P0): R;
    artboardPositionItem<R = MSArtboardPositionInspectorItem>(): R;
    setArtboardPositionItem<R = void, P0 = MSArtboardPositionInspectorItem>(_v: P0): R;
    positionItem<R = MSPositionInspectorItem>(): R;
    setPositionItem<R = void, P0 = MSPositionInspectorItem>(_v: P0): R;
  }
  namespace MSGeometryInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseInspectorSection {
      alloc<R = MSGeometryInspectorSection>(): R;
      new: <R = MSGeometryInspectorSection>() => R;
    }
  }
}

declare const MSGeometryInspectorSection: cocoa.MSGeometryInspectorSection.CLASS;
