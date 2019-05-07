/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPatternFieldProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    menuForFindPatternAttachment<R = NSMenu, P0 = NSFindPatternAttachmentCell>(_menuForFindPatternAttachment: P0): R;
    plainTextValue<R = NSString>(): R;
    setFindPatternPropertyList<R = void, P0 = unknown>(_setFindPatternPropertyList: P0): R;
    findPatternPropertyList<R = unknown>(): R;
    hasFindPattern<R = boolean>(): R;
    replacementExpression<R = NSString>(): R;
    regularExpression<R = NSString>(): R;
    findPatternArray<R = NSArray>(): R;
    setFindPatternArray<R = void, P0 = NSArray>(_setFindPatternArray: P0): R;
    insertNewFindPattern<R = void, P0 = NSFindPattern>(_insertNewFindPattern: P0): R;
    removeFindPattern<R = boolean, P0 = NSFindPattern>(_removeFindPattern: P0): R;
    findPatternManager<R = NSFindPatternManager>(): R;
    setFindPatternManager<R = void, P0 = NSFindPatternManager>(_v: P0): R;
  }
  namespace NSFindPatternFieldProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
