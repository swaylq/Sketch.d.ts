/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerData<T0 = void, T1 = void, T2 = void> extends _MSRulerData {
    setValue_forGuideAtIndex<R = void, P0 = number, P1 = number>(_setValue: P0, _forGuideAtIndex: P1): R;
    replaceGuideAtIndex_withGuide<R = void, P0 = number, P1 = unknown>(_replaceGuideAtIndex: P0, _withGuide: P1): R;
    guideAtIndex<R = number, P0 = number>(_guideAtIndex: P0): R;
    numberOfGuides<R = number>(): R;
    removeAllGuides<R = void>(): R;
    removeGuide<R = void, P0 = unknown>(_removeGuide: P0): R;
    removeGuideAtIndex<R = void, P0 = number>(_removeGuideAtIndex: P0): R;
    addGuide<R = void, P0 = unknown>(_addGuide: P0): R;
    addGuideWithValue<R = void, P0 = number>(_addGuideWithValue: P0): R;
  }
  namespace MSRulerData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSRulerData {
      alloc<R = MSRulerData>(): R;
      new: <R = MSRulerData>() => R;
    }
  }
}

declare const MSRulerData: cocoa.MSRulerData.CLASS;
