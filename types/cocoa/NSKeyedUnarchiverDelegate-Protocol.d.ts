/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyedUnarchiverDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    unarchiverDidFinish<R = void, P0 = NSKeyedUnarchiver>(_unarchiverDidFinish: P0): R;
    unarchiverWillFinish<R = void, P0 = NSKeyedUnarchiver>(_unarchiverWillFinish: P0): R;
    unarchiver_willReplaceObject_withObject<R = void, P0 = NSKeyedUnarchiver, P1 = unknown, P2 = unknown>(_unarchiver: P0, _willReplaceObject: P1, _withObject: P2): R;
    unarchiver_didDecodeObject<R = unknown, P0 = NSKeyedUnarchiver, P1 = unknown>(_unarchiver: P0, _didDecodeObject: P1): R;
    unarchiver_cannotDecodeObjectOfClassName_originalClasses<R = unknown, P0 = NSKeyedUnarchiver, P1 = NSString, P2 = NSArray>(_unarchiver: P0, _cannotDecodeObjectOfClassName: P1, _originalClasses: P2): R;
  }
  namespace NSKeyedUnarchiverDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
