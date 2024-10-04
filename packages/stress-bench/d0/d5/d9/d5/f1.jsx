import I from "@iconify-icons/material-symbols/alarm-smart-wake-sharp.js";
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
