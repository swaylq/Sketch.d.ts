/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConvertFlowToHotspotAction<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    convertFlowToHotspot<R = void, P0 = unknown>(_convertFlowToHotspot: P0): R;
  }
  namespace MSConvertFlowToHotspotAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFlowBaseAction {
      alloc<R = MSConvertFlowToHotspotAction>(): R;
      new: <R = MSConvertFlowToHotspotAction>() => R;
    }
  }
}

declare const MSConvertFlowToHotspotAction: cocoa.MSConvertFlowToHotspotAction.CLASS;
