/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGDrawableElement<T0 = void, T1 = void, T2 = void> extends _SVGDrawableElement {
    gradientFromSVGGradient_layer<R = unknown, P0 = unknown, P1 = unknown>(_gradientFromSVGGradient: P0, _layer: P1): R;
    applyEffectsToLayer<R = void, P0 = unknown>(_applyEffectsToLayer: P0): R;
    applyScaling_recursivelyToStyleOfLayer_parentStyle<R = void, P0 = number, P1 = unknown, P2 = unknown>(_applyScaling: P0, _recursivelyToStyleOfLayer: P1, _parentStyle: P2): R;
    applyTransform_toLayer<R = void, P0 = unknown, P1 = unknown>(_applyTransform: P0, _toLayer: P1): R;
    resizeLayer_withoutContraintsToRect<R = void, P0 = unknown, P1 = CGRect>(_resizeLayer: P0, _withoutContraintsToRect: P1): R;
    enclosingLayerForLayer_parentLayer<R = unknown, P0 = unknown, P1 = unknown>(_enclosingLayerForLayer: P0, _parentLayer: P1): R;
    emptyLayerWithParentLayer<R = unknown, P0 = unknown>(_emptyLayerWithParentLayer: P0): R;
    makeLayerGroupWithParentLayer<R = unknown, P0 = unknown>(_makeLayerGroupWithParentLayer: P0): R;
    dontCollapse<R = boolean>(): R;
    processStyles_parent<R = void, P0 = unknown, P1 = unknown>(_processStyles: P0, _parent: P1): R;
    processClipping_parent<R = void, P0 = unknown, P1 = unknown>(_processClipping: P0, _parent: P1): R;
    processDeferredClippingAtIndex<R = void, P0 = number>(_processDeferredClippingAtIndex: P0): R;
    deferredClipping<R = NSXMLElement>(): R;
    setDeferredClipping<R = void, P0 = NSXMLElement>(_v: P0): R;
  }
  namespace SVGDrawableElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGDrawableElement {
      alloc<R = SVGDrawableElement>(): R;
      new: <R = SVGDrawableElement>() => R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGDrawableElement: cocoa.SVGDrawableElement.CLASS;
