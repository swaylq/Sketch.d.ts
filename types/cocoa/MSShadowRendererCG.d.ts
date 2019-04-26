/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShadowRendererCG<T0 = void, T1 = void, T2 = void> extends NSObject, MSShadowRendererProtocol {
    fillAndStrokeShadow_path_cacheObject_windingRule_options_strokeType_lineWidth_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = number, P6 = number, P7 = unknown>(_fillAndStrokeShadow: P0, _path: P1, _cacheObject: P2, _windingRule: P3, _options: P4, _strokeType: P5, _lineWidth: P6, _context: P7): R;
    strokeShadow_path_cacheObject_strokeType_options_lineWidth_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = number, P6 = unknown>(_strokeShadow: P0, _path: P1, _cacheObject: P2, _strokeType: P3, _options: P4, _lineWidth: P5, _context: P6): R;
    fillShadow_path_cacheObject_windingRule_spread_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = number, P5 = unknown>(_fillShadow: P0, _path: P1, _cacheObject: P2, _windingRule: P3, _spread: P4, _context: P5): R;
    clipAndTransformForShadow_forBounds_context_inBlock<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = CDUnknownBlockType>(_clipAndTransformForShadow: P0, _forBounds: P1, _context: P2, _inBlock: P3): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSShadowRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSShadowRendererProtocol {
      alloc<R = MSShadowRendererCG>(): R;
      new: <R = MSShadowRendererCG>() => R;
    }
  }
}

declare const MSShadowRendererCG: cocoa.MSShadowRendererCG.CLASS;
