/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableBitmapLayer<T0 = void, T1 = void, T2 = void> extends _MSImmutableBitmapLayer {
    NSImage<R = unknown>(): R;
    migratePropertiesFromV75OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV75OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV56OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV56OrEarlierWithUnarchiver: P0): R;
    imageElementWithAttributes_exporter<R = unknown, P0 = unknown, P1 = unknown>(_imageElementWithAttributes: P0, _exporter: P1): R;
    addImageElementAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addImageElementAttributes: P0, _exporter: P1): R;
    fillReplacesImage<R = boolean>(): R;
    setFillReplacesImage<R = void, P0 = boolean>(_v: P0): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
    // + MSImmutableBitmapLayer(MSOverrideManagementItem): 
    previewImageForOverrideManagement<R = unknown>(): R;
    // + MSImmutableBitmapLayer(MSOverrideRepresentationPreview): 
    overridePreviewImageInDocument<R = unknown, P0 = unknown>(_overridePreviewImageInDocument: P0): R;
    // + MSImmutableBitmapLayer(OverrideUI): 
    overrideViewControllerClassForOverridePoint<R = unknown, P0 = unknown>(_overrideViewControllerClassForOverridePoint: P0): R;
    // + MSImmutableBitmapLayer(Rendering): 
    shouldRenderInTransparencyLayer<R = boolean>(): R;
    // + MSImmutableBitmapLayer(SVGExport): 
    addGroupContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addGroupContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addContentToElement_attributes_exporter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_addContentToElement: P0, _attributes: P1, _exporter: P2): R;
    addPathDefinitionToDocument<R = void, P0 = unknown>(_addPathDefinitionToDocument: P0): R;
    imageElementWithAttributes_exporter<R = unknown, P0 = unknown, P1 = unknown>(_imageElementWithAttributes: P0, _exporter: P1): R;
    addImageElementAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addImageElementAttributes: P0, _exporter: P1): R;
    appendBaseTranslation_exporter<R = void, P0 = unknown, P1 = unknown>(_appendBaseTranslation: P0, _exporter: P1): R;
    requiresPathDefinition<R = boolean, P0 = unknown>(_requiresPathDefinition: P0): R;
    svgStyle<R = unknown, P0 = unknown>(_svgStyle: P0): R;
  }
  namespace MSImmutableBitmapLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableBitmapLayer {
      alloc<R = MSImmutableBitmapLayer>(): R;
      new: <R = MSImmutableBitmapLayer>() => R;
  
  }
  }
}

declare const MSImmutableBitmapLayer: cocoa.MSImmutableBitmapLayer.CLASS;
