/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStyleShadow<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleShadow, MSColorUserProtocol {
    updateColorCounter<R = void, P0 = unknown>(_updateColorCounter: P0): R;
    addSVGFilterWithParent_exporter_index<R = void, P0 = unknown, P1 = unknown, P2 = number>(_addSVGFilterWithParent: P0, _exporter: P1, _index: P2): R;
    addColorMatrix_color_output_filter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_addColorMatrix: P0, _color: P1, _output: P2, _filter: P3): R;
    addOffsetTo_dx_dy_output_filter<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown>(_addOffsetTo: P0, _dx: P1, _dy: P2, _output: P3, _filter: P4): R;
    addCompositeMask_mask_output_filter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_addCompositeMask: P0, _mask: P1, _output: P2, _filter: P3): R;
    addBlurWithRadius_input_output_filter<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_addBlurWithRadius: P0, _input: P1, _output: P2, _filter: P3): R;
    addSpread_withInput_output_filter<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_addSpread: P0, _withInput: P1, _output: P2, _filter: P3): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableStyleShadow(SVGExporter): 
    addSVGFilterWithParent_exporter_index<R = void, P0 = unknown, P1 = unknown, P2 = number>(_addSVGFilterWithParent: P0, _exporter: P1, _index: P2): R;
    addColorMatrix_color_output_filter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_addColorMatrix: P0, _color: P1, _output: P2, _filter: P3): R;
    addOffsetTo_dx_dy_output_filter<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown>(_addOffsetTo: P0, _dx: P1, _dy: P2, _output: P3, _filter: P4): R;
    addCompositeMask_mask_output_filter<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_addCompositeMask: P0, _mask: P1, _output: P2, _filter: P3): R;
    addBlurWithRadius_input_output_filter<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_addBlurWithRadius: P0, _input: P1, _output: P2, _filter: P3): R;
    addSpread_withInput_output_filter<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_addSpread: P0, _withInput: P1, _output: P2, _filter: P3): R;
    // + MSImmutableStyleShadow(ColorSource):
    colorUserColorUse<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImmutableStyleShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStyleShadow, MSColorUserProtocol {
      alloc<R = MSImmutableStyleShadow>(): R;
      new: <R = MSImmutableStyleShadow>() => R;
  
  }
  }
}

declare const MSImmutableStyleShadow: cocoa.MSImmutableStyleShadow.CLASS;
