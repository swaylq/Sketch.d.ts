/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface RTIInputSystemDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    inputSystemService_didCreateInputSession<R = void, P0 = RTIInputSystemService, P1 = RTIInputSystemServiceSession>(_inputSystemService: P0, _didCreateInputSession: P1): R;
    inputSystemService_inputSessionDidUnpause_withReason<R = void, P0 = RTIInputSystemService, P1 = RTIInputSystemServiceSession, P2 = NSString>(_inputSystemService: P0, _inputSessionDidUnpause: P1, _withReason: P2): R;
    inputSystemService_inputSessionDidPause_withReason<R = void, P0 = RTIInputSystemService, P1 = RTIInputSystemServiceSession, P2 = NSString>(_inputSystemService: P0, _inputSessionDidPause: P1, _withReason: P2): R;
    inputSystemService_inputSessionDocumentDidChange<R = void, P0 = RTIInputSystemService, P1 = RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDocumentDidChange: P1): R;
    inputSystemService_inputSessionDidDie<R = void, P0 = RTIInputSystemService, P1 = RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDidDie: P1): R;
    inputSystemService_inputSessionDidEnd<R = void, P0 = RTIInputSystemService, P1 = RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDidEnd: P1): R;
    inputSystemService_inputSessionDidBegin<R = void, P0 = RTIInputSystemService, P1 = RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDidBegin: P1): R;
  }
  namespace RTIInputSystemDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
