/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLevelIndicator<T0 = void, T1 = void, T2 = void> extends NSControl {
    setCustomCriticalFillColor<R = void, P0 = unknown>(_setCustomCriticalFillColor: P0): R;
    customCriticalFillColor<R = unknown>(): R;
    setCustomWarningFillColor<R = void, P0 = unknown>(_setCustomWarningFillColor: P0): R;
    customWarningFillColor<R = unknown>(): R;
    setCustomFillColor<R = void, P0 = unknown>(_setCustomFillColor: P0): R;
    customFillColor<R = unknown>(): R;
    tickMarkValueAtIndex<R = number, P0 = number>(_tickMarkValueAtIndex: P0): R;
    rectOfTickMarkAtIndex<R = CGRect, P0 = number>(_rectOfTickMarkAtIndex: P0): R;
    setAlwaysDrawRatingPlaceholder<R = void, P0 = boolean>(_setAlwaysDrawRatingPlaceholder: P0): R;
    alwaysDrawRatingPlaceholder<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    ratingPlaceholderImage<R = NSImage>(): R;
    setRatingPlaceholderImage<R = void, P0 = NSImage>(_v: P0): R;
    ratingImage<R = NSImage>(): R;
    setRatingImage<R = void, P0 = NSImage>(_v: P0): R;
    placeholderVisibility<R = number>(): R;
    setPlaceholderVisibility<R = void, P0 = number>(_v: P0): R;
    drawsTieredCapacityLevels<R = boolean>(): R;
    setDrawsTieredCapacityLevels<R = void, P0 = boolean>(_v: P0): R;
    criticalFillColor<R = NSColor>(): R;
    setCriticalFillColor<R = void, P0 = NSColor>(_v: P0): R;
    warningFillColor<R = NSColor>(): R;
    setWarningFillColor<R = void, P0 = NSColor>(_v: P0): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
    numberOfMajorTickMarks<R = number>(): R;
    setNumberOfMajorTickMarks<R = void, P0 = number>(_v: P0): R;
    numberOfTickMarks<R = number>(): R;
    setNumberOfTickMarks<R = void, P0 = number>(_v: P0): R;
    tickMarkPosition<R = number>(): R;
    setTickMarkPosition<R = void, P0 = number>(_v: P0): R;
    criticalValue<R = number>(): R;
    setCriticalValue<R = void, P0 = number>(_v: P0): R;
    warningValue<R = number>(): R;
    setWarningValue<R = void, P0 = number>(_v: P0): R;
    maxValue<R = number>(): R;
    setMaxValue<R = void, P0 = number>(_v: P0): R;
    minValue<R = number>(): R;
    setMinValue<R = void, P0 = number>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    levelIndicatorStyle<R = number>(): R;
    setLevelIndicatorStyle<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSLevelIndicator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSLevelIndicator>(): R;
      new: <R = NSLevelIndicator>() => R;
    }
  }
}

declare const NSLevelIndicator: cocoa.NSLevelIndicator.CLASS;
