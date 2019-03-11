/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHStringAttributes<T = any> extends cocoa.NSDictionary, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    keyEnumerator<R = unknown>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    count<R = number>(): R;
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    init<R = unknown>(): R;
    initWithObjects_forKeys_count<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithObjects: P0, _forKeys: P1, _count: P2): R;
    shadow<R = cocoa.NSShadow>(): R;
    setShadow<R = void, P0 = cocoa.NSShadow>(_v: P0): R;
    alignment<R = number>(): R;
    setAlignment<R = void, P0 = number>(_v: P0): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    fontSize<R = number>(): R;
    setFontSize<R = void, P0 = number>(_v: P0): R;
    font<R = cocoa.NSFont>(): R;
    setFont<R = void, P0 = cocoa.NSFont>(_v: P0): R;
  }
  namespace classes {
    export interface CHStringAttributes<T = any> extends cocoa.classes.NSDictionary, cocoa.classes.NSCopyingProtocol {
      stringAttributesWithFont_color_alignment<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_stringAttributesWithFont: P0, _color: P1, _alignment: P2): R;
      stringAttributesWithFont_alignment<R = unknown, P0 = unknown, P1 = number>(_stringAttributesWithFont: P0, _alignment: P1): R;
      stringAttributesWithFont_color<R = unknown, P0 = unknown, P1 = unknown>(_stringAttributesWithFont: P0, _color: P1): R;
      stringAttributesWithFont<R = unknown, P0 = unknown>(_stringAttributesWithFont: P0): R;
    }
  }
}

declare const CHStringAttributes: cocoa.classes.CHStringAttributes;
