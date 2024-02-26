module.exports = (msg, { success, error }, cp) => {
  success({
      {
  connectorId: 0,
  meterValue: [
    {
      timestamp: (new Date()).toISOString(),
      sampledValue: [
        {
          value: "ABCDEF",
          context: Interruption.Begin,
          format: Raw,
          measurand: Energy.Active.Export.Interval,
          phase: L1-L2,
          location: Cable,
          unit: kvarh
        },
        {
          value: ABCDEFGHIJKLMNOPQRSTUVWXYZ,
          context: Sample.Periodic,
          format: Raw,
          measurand: Power.Active.Export,
          phase: L3,
          location: Cable,
          unit: Wh
        },
        {
          value: ABCDEFGHIJKLMNOPQRSTUVWX,
          context: Transaction.End,
          format: SignedData,
          measurand: Power.Active.Import,
          phase: L3-L1,
          location: Outlet,
          unit: K
        },
        {
          value: ABCDEF,
          context: Other,
          format: SignedData,
          measurand: RPM,
          phase: L1-L2,
          location: Body,
          unit: kWh
        },
        {
          value: ABCDEF,
          context: Sample.Clock,
          format: Raw,
          measurand: Energy.Reactive.Import.Register,
          phase: L3,
          location: Cable,
          unit: Wh
        }
      ]
    },
    {
      timestamp: ABCDEFGHIJKLMNOPQRSTUVWXYZA,
      sampledValue: [
        {
          value: ABCDEFGHIJKLMNOPQRSTUVWXYZAB,
          context: Sample.Clock,
          format: Raw,
          measurand: Energy.Reactive.Import.Register,
          phase: L2,
          location: Outlet,
          unit: K
        },
        {
          value: ABCDEFGHIJKLMNOPQRSTUVWXYZA,
          context: Interruption.Begin,
          format: Raw,
          measurand: Frequency,
          phase: L1-L2,
          location: EV,
          unit: kvarh
        }
      ]
    },
    {
      timestamp: ABCDEFGHIJKLMNOPQ,
      sampledValue: [
        {
          value: ABCDEFGHIJKLMNOPQRSTUVWXYZ,
          context: Trigger,
          format: SignedData,
          measurand: Current.Export,
          phase: L3,
          location: Outlet,
          unit: varh
        },
        {
          value: ABCDEF,
          context: Other,
          format: Raw,
          measurand: Voltage,
          phase: L2-L3,
          location: EV,
          unit: W
        },
        {
          value: ABCDEFGH,
          context: Interruption.End,
          format: Raw,
          measurand: RPM,
          phase: L1,
          location: Cable,
          unit: kVA
        },
        {
          value: ABCDEFGHIJKLMNOPQRSTUVW,
          context: Sample.Clock,
          format: SignedData,
          measurand: Power.Active.Import,
          phase: L3,
          location: Cable,
          unit: Percent
        }
      ]
    },
    {
      timestamp: ABCDEFGHIJKLMNOPQRSTUVW,
      sampledValue: [
        {
          value: ABCDEF,
          context: Other,
          format: Raw,
          measurand: Voltage,
          phase: L3-L1,
          location: Outlet,
          unit: kW
        },
        {
          value: ABCDEF,
          context: Interruption.Begin,
          format: SignedData,
          measurand: Energy.Reactive.Export.Register,
          phase: L1,
          location: Outlet,
          unit: kWh
        }
      ]
    },
    {
      timestamp: ABCDEFGHIJKLMNOPQRSTUV,
      sampledValue: []
    },
    {
      timestamp: ABCDEFGHIJKLMNOPQ,
      sampledValue: []
    },
    {
      timestamp: ABCDEFGHIJ,
      sampledValue: [
        {
          value: ABCDEFGHIJKLMNOPQRST,
          context: Interruption.End,
          format: SignedData,
          measurand: Current.Offered,
          phase: L2-N,
          location: EV,
          unit: K
        },
        {
          value: ABCDEFGHI,
          context: Transaction.End,
          format: Raw,
          measurand: Current.Export,
          phase: L2,
          location: Cable,
          unit: Wh
        },
        {
          value: ABCDEFGHIJKLMNOPQRSTUVWXYZABC,
          context: Interruption.Begin,
          format: Raw,
          measurand: Energy.Active.Import.Register,
          phase: L1-N,
          location: Body,
          unit: Celcius
        }
      ]
    },
    {
      timestamp: ABCDEFGHIJKLMNOP,
      sampledValue: []
    },
    {
      timestamp: ABCDEFGHIJKLMNOPQRST,
      sampledValue: [
        {
          value: ABCDEFGHIJKLMNOPQRSTUVWXY,
          context: Trigger,
          format: Raw,
          measurand: Energy.Active.Import.Interval,
          phase: L3,
          location: Inlet,
          unit: kVA
        },
        {
          value: ABCD,
          context: Sample.Periodic,
          format: SignedData,
          measurand: SoC,
          phase: L3-L1,
          location: EV,
          unit: kW
        }
      ]
    }
  ],
  transactionId: 0
}
  });
}
