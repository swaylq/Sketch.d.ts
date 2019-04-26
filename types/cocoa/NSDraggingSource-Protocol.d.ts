/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingSourceProtocol<T0 = void, T1 = void, T2 = void> {
    draggingSession_sourceOperationMaskForDraggingContext<R = number, P0 = NSDraggingSession, P1 = number>(_draggingSession: P0, _sourceOperationMaskForDraggingContext: P1): R;
    ignoreModifierKeysForDraggingSession<R = boolean, P0 = NSDraggingSession>(_ignoreModifierKeysForDraggingSession: P0): R;
    draggingSession_endedAtPoint_operation<R = void, P0 = NSDraggingSession, P1 = CGPoint, P2 = number>(_draggingSession: P0, _endedAtPoint: P1, _operation: P2): R;
    draggingSession_movedToPoint<R = void, P0 = NSDraggingSession, P1 = CGPoint>(_draggingSession: P0, _movedToPoint: P1): R;
    draggingSession_willBeginAtPoint<R = void, P0 = NSDraggingSession, P1 = CGPoint>(_draggingSession: P0, _willBeginAtPoint: P1): R;
  }
  namespace NSDraggingSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
