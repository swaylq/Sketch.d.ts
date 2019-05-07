/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    redoMenuTitleForUndoActionName<R = unknown, P0 = unknown>(_redoMenuTitleForUndoActionName: P0): R;
    undoMenuTitleForUndoActionName<R = unknown, P0 = unknown>(_undoMenuTitleForUndoActionName: P0): R;
    setActionIsDiscardable<R = void, P0 = boolean>(_setActionIsDiscardable: P0): R;
    setActionName<R = void, P0 = unknown>(_setActionName: P0): R;
    _setGroupIdentifier<R = void, P0 = unknown>(__setGroupIdentifier: P0): R;
    registerUndoWithTarget_handler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_registerUndoWithTarget: P0, _handler: P1): R;
    registerUndoWithTarget_selector_object<R = void, P0 = unknown, P1 = string, P2 = unknown>(_registerUndoWithTarget: P0, _selector: P1, _object: P2): R;
    _forwardTargetInvocation<R = void, P0 = unknown>(__forwardTargetInvocation: P0): R;
    _registerUndoObject<R = void, P0 = unknown>(__registerUndoObject: P0): R;
    _methodSignatureForTargetSelector<R = unknown, P0 = string>(__methodSignatureForTargetSelector: P0): R;
    prepareWithInvocationTarget<R = unknown, P0 = unknown>(_prepareWithInvocationTarget: P0): R;
    removeAllActionsWithTarget<R = void, P0 = unknown>(_removeAllActionsWithTarget: P0): R;
    removeAllActions<R = void>(): R;
    redo<R = void>(): R;
    undoNestedGroup<R = void>(): R;
    undo<R = void>(): R;
    enableUndoRegistration<R = void>(): R;
    disableUndoRegistration<R = void>(): R;
    endUndoGrouping<R = void>(): R;
    _endUndoGroupRemovingIfEmpty<R = boolean, P0 = boolean>(__endUndoGroupRemovingIfEmpty: P0): R;
    beginUndoGrouping<R = void>(): R;
    _postCheckpointNotification<R = void>(): R;
    _prepareEventGrouping<R = void>(): R;
    _cancelAutomaticTopLevelGroupEnding<R = void>(): R;
    _scheduleAutomaticTopLevelGroupEnding<R = void>(): R;
    _delayAutomaticTermination<R = void, P0 = number>(__delayAutomaticTermination: P0): R;
    dealloc<R = void>(): R;
    _rollbackUndoGrouping<R = void>(): R;
    _commitUndoGrouping<R = void>(): R;
    _processEndOfEventNotification<R = void, P0 = unknown>(__processEndOfEventNotification: P0): R;
    _shouldCoalesceTypingForText<R = boolean, P0 = unknown>(__shouldCoalesceTypingForText: P0): R;
    _undoStack<R = unknown>(): R;
    redoMenuItemTitle<R = NSString>(): R;
    undoMenuItemTitle<R = NSString>(): R;
    redoActionIsDiscardable<R = boolean>(): R;
    undoActionIsDiscardable<R = boolean>(): R;
    redoActionName<R = NSString>(): R;
    undoActionName<R = NSString>(): R;
    redoing<R = boolean>(): R;
    undoing<R = boolean>(): R;
    canRedo<R = boolean>(): R;
    canUndo<R = boolean>(): R;
    runLoopModes<R = NSArray>(): R;
    setRunLoopModes<R = void, P0 = NSArray>(_v: P0): R;
    levelsOfUndo<R = number>(): R;
    setLevelsOfUndo<R = void, P0 = number>(_v: P0): R;
    groupsByEvent<R = boolean>(): R;
    setGroupsByEvent<R = void, P0 = boolean>(_v: P0): R;
    undoRegistrationEnabled<R = boolean>(): R;
    groupingLevel<R = number>(): R;
  }
  namespace NSUndoManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUndoManager>(): R;
      new: <R = NSUndoManager>() => R;
      _endTopLevelGroupings<R = void>(): R;
      _setEndsTopLevelGroupingsAfterRunLoopIterations<R = void, P0 = boolean>(__setEndsTopLevelGroupingsAfterRunLoopIterations: P0): R;
    }
  }
}

declare const NSUndoManager: cocoa.NSUndoManager.CLASS;
