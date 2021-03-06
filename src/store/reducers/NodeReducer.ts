import { createReducer, ActionType } from "typesafe-actions";
import { KristWorkDetailed } from "../../krist/api/types";
import { setSyncNode, setLastBlockID, setDetailedWork } from "../actions/NodeActions";

import packageJson from "../../../package.json";

export interface State {
  readonly lastBlockID: number;
  readonly detailedWork?: KristWorkDetailed;
  readonly syncNode: string;
}

export function getInitialNodeState(): State {
  return {
    lastBlockID: 0,
    syncNode: localStorage.getItem("syncNode") || packageJson.defaultSyncNode
  };
}

export const NodeReducer = createReducer({} as State)
  .handleAction(setSyncNode, (state: State, action: ActionType<typeof setSyncNode>) => ({
    ...state,
    syncNode: action.payload
  }))
  .handleAction(setLastBlockID, (state: State, action: ActionType<typeof setLastBlockID>) => ({
    ...state,
    lastBlockID: action.payload
  }))
  .handleAction(setDetailedWork, (state: State, action: ActionType<typeof setDetailedWork>) => ({
    ...state,
    detailedWork: action.payload
  }));

