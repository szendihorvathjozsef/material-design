import type { Location } from "react-router-dom";

export enum SliceStatus {
	Idle = "idle",
	Pending = "pending",
	Rejected = "Rejected",
	Fulfilled = "fulfilled",
}

export type Id = string;

export type Creation = {
	createdBy: Id;
	createdOn: number;
};

export type Update = {
	updatedBy: Id;
	updatedOn: number;
};

export type Metadata = {
	name: string;
} & Partial<Creation> &
	Partial<Update>;

export type Schema<
	T extends Metadata,
	Spec extends unknown = Record<string, unknown>,
> = { metadata: T; spec: Spec };

export type WithId = { id: Id };

export type ReferrerRouteState = Location;
