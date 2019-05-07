/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWidgetView<T0 = void, T1 = void, T2 = void> extends NSView {
    _queryWidgetMetrics<R = unknown, P0 = unknown>(__queryWidgetMetrics: P0): R;
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    layerContentsRedrawPolicy<R = number>(): R;
    widgetDefinition<R = NSDictionary>(): R;
    setWidgetDefinition<R = void, P0 = NSDictionary>(_v: P0): R;
    scalableAxes<R = number>(): R;
    baselineOffsetFromBottom<R = number>(): R;
    contentInsets<R = NSEdgeInsets>(): R;
    baseWidgetKeys<R = NSDictionary>(): R;
  }
  namespace NSWidgetView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSWidgetView>(): R;
      new: <R = NSWidgetView>() => R;
    }
  }
}

declare const NSWidgetView: cocoa.NSWidgetView.CLASS;
