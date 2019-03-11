/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSValue<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    initWithBytes_objCType<R = unknown, P0 = void, P1 = string>(_initWithBytes: P0, _objCType: P1): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    classForCoder<R = unknown>(): R;
    edgeInsetsValue<R = cocoa.NSEdgeInsets>(): R;
    rangeValue<R = cocoa._NSRange>(): R;
    rectValue<R = cocoa.CGRect>(): R;
    sizeValue<R = cocoa.CGSize>(): R;
    pointValue<R = cocoa.CGPoint>(): R;
    pointerValue<R = void>(): R;
    weakObjectValue<R = unknown>(): R;
    nonretainedObjectValue<R = unknown>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    isEqualToValue<R = boolean, P0 = unknown>(_isEqualToValue: P0): R;
    _matchType_size_strict<R = boolean, P0 = string, P1 = number, P2 = boolean>(__matchType: P0, _size: P1, _strict: P2): R;
    _matchType_size<R = boolean, P0 = string, P1 = number>(__matchType: P0, _size: P1): R;
    getValue_size<R = void, P0 = void, P1 = number>(_getValue: P0, _size: P1): R;
    getValue<R = void, P0 = void>(_getValue: P0): R;
    isNSValue__<R = boolean>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    objCType<R = string>(): R;
    // + NSValue(NSValueUIGeometryExtensions,UIKitStubs,TreeAsDictionarySupport):
    treeAsDictionary<R = unknown>(): R;
  }
  namespace classes {
    export interface NSValue<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSValue>(): R;
      new: <R = NSValue>() => R;
      valueWithEdgeInsets<R = unknown, P0 = cocoa.NSEdgeInsets>(_valueWithEdgeInsets: P0): R;
      valueWithRange<R = unknown, P0 = cocoa._NSRange>(_valueWithRange: P0): R;
      valueWithRect<R = unknown, P0 = cocoa.CGRect>(_valueWithRect: P0): R;
      valueWithSize<R = unknown, P0 = cocoa.CGSize>(_valueWithSize: P0): R;
      valueWithPoint<R = unknown, P0 = cocoa.CGPoint>(_valueWithPoint: P0): R;
      valueWithPointer<R = unknown, P0 = void>(_valueWithPointer: P0): R;
      valueWithWeakObject<R = unknown, P0 = unknown>(_valueWithWeakObject: P0): R;
      valueWithNonretainedObject<R = unknown, P0 = unknown>(_valueWithNonretainedObject: P0): R;
      valueWithBytes_objCType<R = unknown, P0 = void, P1 = string>(_valueWithBytes: P0, _objCType: P1): R;
      value_withObjCType<R = unknown, P0 = void, P1 = string>(_value: P0, _withObjCType: P1): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
      // + NSValue(NSValueUIGeometryExtensions,UIKitStubs,TreeAsDictionarySupport):
      _valueWithCGPoint<R = unknown, P0 = cocoa.CGPoint>(__valueWithCGPoint: P0): R;
      _valueWithCGRect<R = unknown, P0 = cocoa.CGRect>(__valueWithCGRect: P0): R;
    }
  }
}

declare const NSValue: cocoa.classes.NSValue;
