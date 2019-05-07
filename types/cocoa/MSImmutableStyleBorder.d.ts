/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleBorder<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleBorder {
    updateColorCounter<R = void, P0 = unknown>(_updateColorCounter: P0): R;
    drawGradientBorder_advancedOptions_originalPath_isArtistic_frame_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = CGRect, P5 = unknown>(_drawGradientBorder: P0, _advancedOptions: P1, _originalPath: P2, _isArtistic: P3, _frame: P4, _context: P5): R;
    drawBorder_advancedOptions_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_drawBorder: P0, _advancedOptions: P1, _context: P2): R;
    needsOutlinePath<R = boolean, P0 = unknown>(_needsOutlinePath: P0): R;
    requiresMask<R = boolean, P0 = unknown>(_requiresMask: P0): R;
    pathWithExporter<R = unknown, P0 = unknown>(_pathWithExporter: P0): R;
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    addOuterMaskToAttributes_withExporter<R = void, P0 = unknown, P1 = unknown>(_addOuterMaskToAttributes: P0, _withExporter: P1): R;
    addInnerMaskToAttributes_withExporter<R = void, P0 = unknown, P1 = unknown>(_addInnerMaskToAttributes: P0, _withExporter: P1): R;
    addMaskElementToAttributes_withExporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskElementToAttributes: P0, _withExporter: P1): R;
    borderInset<R = number>(): R;
    // + MSImmutableStyleBorder(ColorSource): 
    colorUserColorUse<R = number>(): R;
    // + MSImmutableStyleBorder(Rendering): 
    drawGradientBorder_advancedOptions_originalPath_isArtistic_frame_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = CGRect, P5 = unknown>(_drawGradientBorder: P0, _advancedOptions: P1, _originalPath: P2, _isArtistic: P3, _frame: P4, _context: P5): R;
    drawBorder_advancedOptions_applyClip_context<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = unknown>(_drawBorder: P0, _advancedOptions: P1, _applyClip: P2, _context: P3): R;
    // + MSImmutableStyleBorder(SVGExport): 
    needsOutlinePath<R = boolean, P0 = unknown>(_needsOutlinePath: P0): R;
    requiresMask<R = boolean, P0 = unknown>(_requiresMask: P0): R;
    pathWithExporter<R = unknown, P0 = unknown>(_pathWithExporter: P0): R;
    addSVGAttributes_exporter<R = void, P0 = unknown, P1 = unknown>(_addSVGAttributes: P0, _exporter: P1): R;
    addOuterMaskToAttributes_withExporter<R = void, P0 = unknown, P1 = unknown>(_addOuterMaskToAttributes: P0, _withExporter: P1): R;
    addInnerMaskToAttributes_withExporter<R = void, P0 = unknown, P1 = unknown>(_addInnerMaskToAttributes: P0, _withExporter: P1): R;
    addMaskElementToAttributes_withExporter<R = unknown, P0 = unknown, P1 = unknown>(_addMaskElementToAttributes: P0, _withExporter: P1): R;
    borderInset<R = number>(): R;
  }
  namespace MSImmutableStyleBorder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleBorder {
      alloc<R = MSImmutableStyleBorder>(): R;
      new: <R = MSImmutableStyleBorder>() => R;
  
  }
  }
}

declare const MSImmutableStyleBorder: cocoa.MSImmutableStyleBorder.CLASS;
