import $ from "jquery";
import suggestMail from "./util/suggestMail";

const trigger = {
	suggest: $("[data-trigger-suggest]")
};

const suggestFuc = () => {
	if (!trigger.suggest.length) return;
	suggestMail();
	trigger.suggest.autoEmail([
		"gmail.com",
		"yahoo.co.jp",
		"icloud.com",
		"outlook.jp",
		"outlook.com",
		"hotmail.co.jp",
		"live.jp",
		"infoseek.jp",
		"excite.co.jp",
		"inter7.jp",
		"smoug.net",
		"aol.jp",
		"youngpostman.net",
		"tora.zzn.com",
		"zoho.com",
		"goo.jp",
		"mail.goo.ne.jp",
		"auone.jp",
		"au.com",
		"docomo.ne.jp",
		"hotmail.com",
		"me.com",
		"mineo.jp",
		"nifty.com",
		"yahoo.ne.jp",
		"ybb.ne.jp",
		"ymobile.ne.jp",
		"livedoor.com",
		"ocn.ne.jp",
		"jcom.home.ne.jp",
		"eonet.ne.jp",
		"mou.ne.jp",
		"biglobe.ne.jp",
		"plala.or.jp",
		"t-com.ne.jp",
		"odn.ne.jp",
		"919.ne.jp",
		"nexyzbb.ne.jp",
		"bbiq.jp",
		"cloud-line.net",
		"jcom.zaq.ne.jp",
		"ezweb.ne.jp",
		"softbank.ne.jp",
		"i.softbank.jp",
		"d.vodafone.ne.jp",
		"h.vodafone.ne.jp",
		"t.vodafone.ne.jp",
		"c.vodafone.ne.jp",
		"k.vodafone.ne.jp",
		"r.vodafone.ne.jp",
		"n.vodafone.ne.jp",
		"s.vodafone.ne.jp",
		"q.vodafone.ne.jp",
		"disney.ne.jp",
		"emnet.ne.jp",
		"wcm.ne.jp",
	]);
};

$(() => {
	suggestFuc();
});