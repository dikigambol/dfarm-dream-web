export function ConvertRupiah(props) {
    if (props == "" || props == undefined || props == " ") {
      return "Rp 0";
    } else {
      const amount = parseInt(props);
      const formatNumber = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(amount);
      return String(formatNumber);
    }
  }