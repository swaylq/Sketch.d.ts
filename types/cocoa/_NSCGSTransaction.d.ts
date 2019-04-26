/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSTransaction<T0 = void, T1 = void, T2 = void> extends NSObject {
    disableUpdates<R = void>(): R;
    synchronize<R = void>(): R;
    setObject_forKey<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKey: P1): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    addPostCommitAction<R = void, P0 = CDUnknownBlockType>(_addPostCommitAction: P0): R;
    addActionWithOrder_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_addActionWithOrder: P0, _usingBlock: P1): R;
    dealloc<R = void>(): R;
  }
  namespace _NSCGSTransaction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSCGSTransaction>(): R;
      new: <R = _NSCGSTransaction>() => R;
      isActive<R = boolean>(): R;
      currentTransaction<R = unknown>(): R;
      setSynchronous<R = void, P0 = boolean>(_setSynchronous: P0): R;
      initialize<R = void>(): R;
    }
  }
}
