/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSATSUStyleObject<T0 = void, T1 = void, T2 = void> extends NSObject {
    convertToDictionary<R = unknown>(): R;
    isTypeNotExclusive<R = boolean, P0 = number>(_isTypeNotExclusive: P0): R;
    typeIsNotExclusive<R = void, P0 = number>(_typeIsNotExclusive: P0): R;
    exclusives<R = unknown>(): R;
    mergeStyleInto<R = void, P0 = unknown>(_mergeStyleInto: P0): R;
    mergeAttributesInto<R = void, P0 = unknown>(_mergeAttributesInto: P0): R;
    mergeFontFeaturesInto<R = void, P0 = unknown>(_mergeFontFeaturesInto: P0): R;
    mergeFontVariationsInto<R = void, P0 = unknown>(_mergeFontVariationsInto: P0): R;
    setAttributes_Values_ValueSizes_Count<R = void, P0 = number, P1 = void, P2 = number, P3 = number>(_setAttributes: P0, _Values: P1, _ValueSizes: P2, _Count: P3): R;
    merge<R = void, P0 = OpaqueATSUStyle>(_merge: P0): R;
    mergeInVariations<R = void, P0 = OpaqueATSUStyle>(_mergeInVariations: P0): R;
    description<R = unknown>(): R;
    addFeatureDescriptions<R = void, P0 = unknown>(_addFeatureDescriptions: P0): R;
    addVariationDescriptions<R = void, P0 = unknown>(_addVariationDescriptions: P0): R;
    setVariations_Values_Count<R = void, P0 = number, P1 = number, P2 = number>(_setVariations: P0, _Values: P1, _Count: P2): R;
    setFeatures_selectors_count<R = void, P0 = number, P1 = number, P2 = number>(_setFeatures: P0, _selectors: P1, _count: P2): R;
    style<R = OpaqueATSUStyle>(): R;
    dealloc<R = void>(): R;
    initWithStyle<R = unknown, P0 = OpaqueATSUStyle>(_initWithStyle: P0): R;
  }
  namespace NSATSUStyleObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSATSUStyleObject>(): R;
      new: <R = NSATSUStyleObject>() => R;
    }
  }
}

declare const NSATSUStyleObject: cocoa.NSATSUStyleObject.CLASS;
