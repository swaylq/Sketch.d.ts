/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontOptionsAttributeDescriptor<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithName_allowedClass<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _allowedClass: P1): R;
    allowedClass<R = unknown>(): R;
    name<R = NSString>(): R;
  }
  namespace NSFontOptionsAttributeDescriptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFontOptionsAttributeDescriptor>(): R;
      new: <R = NSFontOptionsAttributeDescriptor>() => R;
      attributeDescriptorWithName_allowedClass<R = unknown, P0 = unknown, P1 = unknown>(_attributeDescriptorWithName: P0, _allowedClass: P1): R;
    }
  }
}

declare const NSFontOptionsAttributeDescriptor: cocoa.NSFontOptionsAttributeDescriptor.CLASS;
