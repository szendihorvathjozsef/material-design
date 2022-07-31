import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import Storage from "@/shared/storage-impl";
import { APPLICATION_ACCESS_TOKEN } from "@/shared/constants";
import { setAsAuthenticated } from "@/shared/store/app.slice";

type Props = {
	roles?: string[];
	children: React.ReactNode;
};

const AuthRequired = ({ children }: Props) => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.application);

	React.useEffect(() => {
		if (Storage.read(APPLICATION_ACCESS_TOKEN) !== null) {
			dispatch(
				setAsAuthenticated({
					id: "mockUser",
					metadata: { name: "MockUser" },
					spec: { email: "mock.user@mock.com", username: "mock.user" },
				}),
			);
		}
	}, [dispatch]);

	if (!user.isAuthenticated) {
		return (
			<Navigate to={{ pathname: "/login" }} state={{ referrer: location }} />
		);
	}

	return <>{children}</>;
};

export default AuthRequired;
