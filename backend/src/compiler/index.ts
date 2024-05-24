import handlebars from "handlebars";
import { otp } from "../emails/otp";

function compilerOtp(name: string, otp_code: number) {
  const template = handlebars.compile(otp);
  const htmlBody = template({
    name: name,
    otp_code: otp_code,
  });
  return htmlBody;
}

export { compilerOtp };
