import { AppSession } from 'schema';

export const SESSION_UPDATE = 'session/Update';
export type SESSION_UPDATE = typeof SESSION_UPDATE;
export interface SessionUpdate {
	type: SESSION_UPDATE;
	session: AppSession;
}

export const openFirstTime = (): SessionUpdate => ({
	type: SESSION_UPDATE,
	session: { firstTimeAt: new Date().getTime() },
});
