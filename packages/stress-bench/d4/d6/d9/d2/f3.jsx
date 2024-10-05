import I from "@iconify-icons/material-symbols/cancel-rounded.js";
import { Icon } from "@iconify/react/dist/offline";
import React, { useContext, useEffect } from "react";

function Component({ show }) {
	return (
		<div className={styles.navbar}>
			<Icon icon={I} />
		</div>
	);
}

export default Component;
