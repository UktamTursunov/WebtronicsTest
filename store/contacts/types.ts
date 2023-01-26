import {Action} from "redux";

export type FetchAboutUsPayload = {
    name: string;
    phone: string;
    email: string;
};

export interface ActionWithPayload extends Action {
    payload?: unknown;
}