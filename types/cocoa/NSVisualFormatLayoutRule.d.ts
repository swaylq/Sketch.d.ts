/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualFormatLayoutRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithVisualFormat_options_metrics_rects_containerRect<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithVisualFormat: P0, _options: P1, _metrics: P2, _rects: P3, _containerRect: P4): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    identifier<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSVisualFormatLayoutRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSVisualFormatLayoutRule>(): R;
      new: <R = NSVisualFormatLayoutRule>() => R;
      ruleWithVisualFormat_options_metrics_views<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown>(_ruleWithVisualFormat: P0, _options: P1, _metrics: P2, _views: P3): R;
      ruleWithVisualFormat_options_metrics_rects_containerRect<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = unknown>(_ruleWithVisualFormat: P0, _options: P1, _metrics: P2, _rects: P3, _containerRect: P4): R;
    }
  }
}

declare const NSVisualFormatLayoutRule: cocoa.NSVisualFormatLayoutRule.CLASS;
