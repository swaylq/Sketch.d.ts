/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBinderPlugin<T0 = void, T1 = void, T2 = void> extends NSObject, _NSBinderPluginProtocol {
    objectMechanismsRequired<R = unknown>(): R;
    needsAction<R = boolean>(): R;
    isEditingAtIndex_withObject<R = boolean, P0 = number, P1 = unknown>(_isEditingAtIndex: P0, _withObject: P1): R;
    isEditingAtIndexPath_withObject<R = boolean, P0 = unknown, P1 = unknown>(_isEditingAtIndexPath: P0, _withObject: P1): R;
    isEditingWithObject<R = boolean, P0 = unknown>(_isEditingWithObject: P0): R;
    editorWithObject<R = unknown, P0 = unknown>(_editorWithObject: P0): R;
    isInvalidationCapableObject_withSelector<R = boolean, P0 = unknown, P1 = string>(_isInvalidationCapableObject: P0, _withSelector: P1): R;
    indexPathForOutlineView_row<R = unknown, P0 = unknown, P1 = number>(_indexPathForOutlineView: P0, _row: P1): R;
    viewForObject<R = unknown, P0 = unknown>(_viewForObject: P0): R;
    cellOrControlForObject<R = unknown, P0 = unknown>(_cellOrControlForObject: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSBinderPluginProtocol {
      alloc<R = _NSBinderPlugin>(): R;
      new: <R = _NSBinderPlugin>() => R;
    }
  }
}
