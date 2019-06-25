//@ts-check
import { Machine } from 'xstate';

const firestoreTodosCollectionMachine = Machine({
  id: 'firestore-todos-collection',
  initial: 'loading',
  states: {
    loading: {
      invoke: {
        src: 'subscribeToFirestore',
        onDone: {
          target: 'connected',
          actions: 'storeUnsubscribeFunction'
        },
        onError: {
          target: 'disconnected'
        }
      }
    },
    connected: {},
    disconnected: {}
  },
  on: {
    UNSUBSCRIBE: {
      target: 'disconnected',
      actions: 'callUnsubscribeFunction'
    }
  }
});

export default firestoreTodosCollectionMachine;
